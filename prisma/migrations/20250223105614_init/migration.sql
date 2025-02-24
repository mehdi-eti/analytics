-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "displayName" TEXT,
    "email" TEXT,
    "password" TEXT,
    "zipCode" TEXT,
    "name" TEXT,
    "avatar" TEXT,
    "email_change" TEXT,
    "emailVisibility" BOOLEAN NOT NULL DEFAULT false,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "emailVerificationToken" TEXT,
    "emailVerificationSentAt" DATETIME,
    "email_change_sent_at" DATETIME,
    "email_change_token_new" TEXT,
    "email_change_confirm_status" INTEGER DEFAULT 0,
    "email_change_token_current" TEXT DEFAULT '',
    "email_confirmed_at" DATETIME,
    "reauthentication_token" TEXT DEFAULT '',
    "reauthentication_sent_at" DATETIME,
    "recovery_token" TEXT,
    "recovery_sent_at" DATETIME,
    "is_super_admin" BOOLEAN NOT NULL DEFAULT false,
    "is_sso_user" BOOLEAN NOT NULL DEFAULT true,
    "is_anonymous" BOOLEAN NOT NULL DEFAULT false,
    "phone" TEXT,
    "phone_change" TEXT DEFAULT '',
    "phone_change_token" TEXT DEFAULT '',
    "phone_change_sent_at" DATETIME,
    "phone_confirmed_at" DATETIME,
    "browser" TEXT,
    "device" TEXT,
    "online" BOOLEAN NOT NULL DEFAULT false,
    "os" TEXT,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "instance_id" TEXT,
    "aud" TEXT,
    "encrypted_password" TEXT,
    "confirmation_token" TEXT,
    "confirmation_sent_at" DATETIME,
    "raw_app_meta_data" JSONB,
    "raw_user_meta_data" JSONB,
    "banned_until" DATETIME,
    "deleted_at" DATETIME,
    "invited_at" DATETIME,
    "last_visit" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "first_visit" DATETIME,
    "confirmed_at" DATETIME,
    "last_login_at" DATETIME,
    "last_sign_in_at" DATETIME
);
INSERT INTO "new_users" ("aud", "avatar", "banned_until", "browser", "confirmation_sent_at", "confirmation_token", "confirmed_at", "created_at", "deleted_at", "device", "displayName", "email", "emailVisibility", "email_change", "email_change_confirm_status", "email_change_sent_at", "email_change_token_current", "email_change_token_new", "email_confirmed_at", "encrypted_password", "first_visit", "id", "instance_id", "invited_at", "is_anonymous", "is_sso_user", "is_super_admin", "last_login_at", "last_sign_in_at", "last_visit", "name", "online", "os", "password", "phone", "phone_change", "phone_change_sent_at", "phone_change_token", "phone_confirmed_at", "raw_app_meta_data", "raw_user_meta_data", "reauthentication_sent_at", "reauthentication_token", "recovery_sent_at", "recovery_token", "updated_at", "verified", "zipCode") SELECT "aud", "avatar", "banned_until", "browser", "confirmation_sent_at", "confirmation_token", "confirmed_at", "created_at", "deleted_at", "device", "displayName", "email", "emailVisibility", "email_change", "email_change_confirm_status", "email_change_sent_at", "email_change_token_current", "email_change_token_new", "email_confirmed_at", "encrypted_password", "first_visit", "id", "instance_id", "invited_at", "is_anonymous", "is_sso_user", "is_super_admin", "last_login_at", "last_sign_in_at", "last_visit", "name", "online", "os", "password", "phone", "phone_change", "phone_change_sent_at", "phone_change_token", "phone_confirmed_at", "raw_app_meta_data", "raw_user_meta_data", "reauthentication_sent_at", "reauthentication_token", "recovery_sent_at", "recovery_token", "updated_at", "verified", "zipCode" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
