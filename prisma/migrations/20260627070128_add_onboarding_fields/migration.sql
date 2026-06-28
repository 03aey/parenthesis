-- AlterTable
ALTER TABLE "users" ADD COLUMN     "accommodation" TEXT,
ADD COLUMN     "bio" TEXT,
ADD COLUMN     "budget" TEXT,
ADD COLUMN     "dietaryRequirements" TEXT[],
ADD COLUMN     "groupSize" TEXT,
ADD COLUMN     "interests" TEXT[],
ADD COLUMN     "location" TEXT,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "travelStyle" TEXT[];
