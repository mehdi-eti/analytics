import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const prisma = new PrismaClient();

async function seed() {
  const data = JSON.parse(fs.readFileSync('prisma-seed.json', 'utf-8'));

  // Insert users
  // await Promise.all(data.users.map(user => prisma.user.create({ data: user })));

  // Insert websites
  await Promise.all(data.websites.map(website => prisma.website.create({ data: website })));

  // Insert sessions
  await Promise.all(data.sessions.map(session => prisma.session.create({ data: session })));

  // Insert events
  await Promise.all(data.events.map(event => prisma.event.create({ data: event })));

  // Insert pageviews
  await Promise.all(data.pageviews.map(pageview => prisma.pageview.create({ data: pageview })));

  // Insert goals
  await Promise.all(data.goals.map(goal => prisma.goal.create({ data: goal })));

  // Insert conversions
  await Promise.all(data.conversions.map(conversion => prisma.conversion.create({ data: conversion })));

  // Insert cohorts
  await Promise.all(data.cohorts.map(cohort => prisma.cohort.create({ data: cohort })));

  // Insert retention data
  await Promise.all(data.retention.map(retention => prisma.retention.create({ data: retention })));

  console.log('✅ Seed data inserted successfully!');
  await prisma.$disconnect();
}

seed().catch((error) => {
  console.error('❌ Error seeding database:', error);
  prisma.$disconnect();
});
