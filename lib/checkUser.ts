import { currentUser } from '@clerk/nextjs/server';
import { db } from '@/lib/db';

export const checkUser = async () => {
  // Retrieve the currently authenticated user from Clerk
  const user = await currentUser();

  // Return null if no user is authenticated
  if (!user) {
    return null;
  }

  // Attempt to locate the user in the database by their Clerk user ID
  let loggedInUser = await db.user.findUnique({
    where: { clerkUserId: user.id },
  });

  // If not found by Clerk ID, attempt lookup by email to prevent duplicate entries
  if (!loggedInUser) {
    loggedInUser = await db.user.findUnique({
      where: { email: user.emailAddresses[0].emailAddress },
    });
  }

  // Return existing user record if found
  if (loggedInUser) {
    return loggedInUser;
  }

  // Create a new user record in the database with information from Clerk
  const newUser = await db.user.create({
    data: {
      clerkUserId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newUser;
};
