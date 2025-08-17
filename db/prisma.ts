import { PrismaClient } from "@/lib/generated/prisma";

const prismaClientSingleton = () => {
	return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

declare global {
	var prisma: PrismaClientSingleton | undefined;
}

const prisma = global.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
	global.prisma = prisma;
}

export default prisma;
