-- CreateTable
CREATE TABLE "Website" (
    "website_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Website_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Session" (
    "session_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "website_id" INTEGER NOT NULL,
    "session_uuid" TEXT NOT NULL,
    "start_time" DATETIME NOT NULL,
    "end_time" DATETIME,
    "ip_address" TEXT,
    "user_agent" TEXT,
    "referrer" TEXT,
    "country_code" TEXT,
    "device_type" TEXT NOT NULL,
    "os" TEXT,
    "browser" TEXT,
    CONSTRAINT "Session_website_id_fkey" FOREIGN KEY ("website_id") REFERENCES "Website" ("website_id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Event" (
    "event_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "session_id" INTEGER NOT NULL,
    "event_type" TEXT NOT NULL,
    "event_name" TEXT,
    "event_time" DATETIME NOT NULL,
    "url_path" TEXT,
    "element_id" TEXT,
    "metadata" JSONB,
    CONSTRAINT "Event_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "Session" ("session_id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pageview" (
    "pageview_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "session_id" INTEGER NOT NULL,
    "url_path" TEXT NOT NULL,
    "view_time" DATETIME NOT NULL,
    CONSTRAINT "Pageview_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "Session" ("session_id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Goal" (
    "goal_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "website_id" INTEGER NOT NULL,
    "goal_name" TEXT NOT NULL,
    "goal_type" TEXT NOT NULL,
    "target_value" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Goal_website_id_fkey" FOREIGN KEY ("website_id") REFERENCES "Website" ("website_id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Conversion" (
    "conversion_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "goal_id" INTEGER NOT NULL,
    "session_id" INTEGER NOT NULL,
    "conversion_time" DATETIME NOT NULL,
    CONSTRAINT "Conversion_goal_id_fkey" FOREIGN KEY ("goal_id") REFERENCES "Goal" ("goal_id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Conversion_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "Session" ("session_id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Cohort" (
    "cohort_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "website_id" INTEGER NOT NULL,
    "cohort_name" TEXT NOT NULL,
    "start_date" DATETIME NOT NULL,
    "end_date" DATETIME,
    CONSTRAINT "Cohort_website_id_fkey" FOREIGN KEY ("website_id") REFERENCES "Website" ("website_id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Retention" (
    "retention_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cohort_id" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "active_date" DATETIME NOT NULL,
    CONSTRAINT "Retention_cohort_id_fkey" FOREIGN KEY ("cohort_id") REFERENCES "Cohort" ("cohort_id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Retention_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Website_domain_key" ON "Website"("domain");

-- CreateIndex
CREATE UNIQUE INDEX "Session_session_uuid_key" ON "Session"("session_uuid");
