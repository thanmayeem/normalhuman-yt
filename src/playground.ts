import { db } from "./server/db";

async function createUser() {
  await db.user.create({
    data: {
      emailAddress: "test@example.com",
      firstName: "Thanm",
      lastName: "Doe",
    },
  });
}

createUser().catch(console.error);
