برای طراحی پایگاه داده اپلیکیشن **مشابه Google Analytics** در **SQLite**، باید جداولی برای ردیابی کاربران، جلسات، رویدادها، منابع ترافیک و اطلاعات دستگاه‌ها ایجاد کنیم. این ساختار به شما امکان می‌دهد داده‌های مربوط به رفتار کاربران را جمع‌آوری و تحلیل کنید.

---

### **📌 طراحی پایگاه داده Google Analytics در SQLite**
```sql
-- جدول کاربران (Users)
CREATE TABLE users (
    id TEXT PRIMARY KEY,         -- شناسه کاربر (User ID)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- جدول جلسات کاربران (Sessions)
CREATE TABLE sessions (
    id TEXT PRIMARY KEY,         -- شناسه جلسه (Session ID)
    user_id TEXT,                -- شناسه کاربر
    user_agent TEXT,             -- مرورگر کاربر
    ip_address TEXT,             -- آدرس IP
    start_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    end_time TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- جدول رویدادها (Events)
CREATE TABLE events (
    id TEXT PRIMARY KEY,         -- شناسه رویداد (Event ID)
    session_id TEXT,             -- شناسه جلسه
    event_name TEXT,             -- نام رویداد (مثلاً page_view, click, scroll)
    event_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    event_data JSON,             -- اطلاعات اضافی رویداد (مانند URL یا دکمه کلیک شده)
    FOREIGN KEY (session_id) REFERENCES sessions(id)
);

-- جدول صفحات بازدید شده (Page Views)
CREATE TABLE pages (
    id TEXT PRIMARY KEY,         -- شناسه صفحه
    session_id TEXT,             -- شناسه جلسه
    page_url TEXT,               -- آدرس صفحه
    referrer TEXT,               -- صفحه ارجاع‌دهنده
    page_title TEXT,             -- عنوان صفحه
    time_spent INTEGER,          -- مدت زمان حضور کاربر در صفحه (به ثانیه)
    FOREIGN KEY (session_id) REFERENCES sessions(id)
);

-- جدول منابع ترافیک (Traffic Sources)
CREATE TABLE traffic_sources (
    id TEXT PRIMARY KEY,         -- شناسه ترافیک
    session_id TEXT,             -- شناسه جلسه
    source TEXT,                 -- منبع (مانند google, facebook)
    medium TEXT,                 -- نوع ترافیک (organic, paid, referral)
    campaign TEXT,               -- نام کمپین (مثلاً google_ads_campaign)
    FOREIGN KEY (session_id) REFERENCES sessions(id)
);

-- جدول اطلاعات دستگاه‌ها (Device Info)
CREATE TABLE device_info (
    id TEXT PRIMARY KEY,         -- شناسه دستگاه
    session_id TEXT,             -- شناسه جلسه
    device_type TEXT,            -- نوع دستگاه (desktop, mobile, tablet)
    os TEXT,                     -- سیستم‌عامل (Windows, iOS, Android)
    browser TEXT,                -- مرورگر کاربر (Chrome, Firefox)
    FOREIGN KEY (session_id) REFERENCES sessions(id)
);
```

---

### **📌 داده‌های نمونه (INSERT INTO)**
```sql
-- کاربران
INSERT INTO users (id) VALUES ('user_001');
INSERT INTO users (id) VALUES ('user_002');

-- جلسات
INSERT INTO sessions (id, user_id, user_agent, ip_address) VALUES 
('session_001', 'user_001', 'Mozilla/5.0', '192.168.1.1'),
('session_002', 'user_002', 'Chrome/90.0', '192.168.1.2');

-- رویدادها
INSERT INTO events (id, session_id, event_name, event_time, event_data) VALUES 
('event_001', 'session_001', 'page_view', '2025-02-05 10:00:00', '{"url": "/home"}'),
('event_002', 'session_001', 'button_click', '2025-02-05 10:05:00', '{"button_id": "signup"}');

-- صفحات بازدید شده
INSERT INTO pages (id, session_id, page_url, referrer, page_title, time_spent) VALUES 
('page_001', 'session_001', '/home', 'google.com', 'Home Page', 120),
('page_002', 'session_002', '/about', 'facebook.com', 'About Us', 90);

-- منابع ترافیک
INSERT INTO traffic_sources (id, session_id, source, medium, campaign) VALUES 
('source_001', 'session_001', 'google', 'organic', 'seo_campaign'),
('source_002', 'session_002', 'facebook', 'paid', 'fb_ads');

-- اطلاعات دستگاه‌ها
INSERT INTO device_info (id, session_id, device_type, os, browser) VALUES 
('device_001', 'session_001', 'desktop', 'Windows', 'Firefox'),
('device_002', 'session_002', 'mobile', 'iOS', 'Chrome');
```

---

### **📌 کوئری‌های مهم برای تحلیل داده‌ها**
#### **1️⃣ تعداد بازدیدهای هر صفحه**
```sql
SELECT page_url, COUNT(*) AS visits
FROM pages
GROUP BY page_url
ORDER BY visits DESC;
```

#### **2️⃣ تعداد کاربران بر اساس نوع دستگاه**
```sql
SELECT device_type, COUNT(*) AS user_count
FROM device_info
GROUP BY device_type;
```

#### **3️⃣ نرخ تبدیل کاربران (تعداد افرادی که دکمه خاصی را کلیک کرده‌اند)**
```sql
SELECT COUNT(*) AS total_users,
       SUM(CASE WHEN event_name = 'button_click' THEN 1 ELSE 0 END) AS button_clicks,
       (SUM(CASE WHEN event_name = 'button_click' THEN 1 ELSE 0 END) * 100.0) / COUNT(*) AS conversion_rate
FROM events;
```

#### **4️⃣ تعداد کاربران ورودی از هر منبع ترافیک**
```sql
SELECT source, COUNT(*) AS total_users
FROM traffic_sources
GROUP BY source
ORDER BY total_users DESC;
```

---

## **🚀 خلاصه**
✅ **این ساختار پایگاه داده به شما امکان می‌دهد اطلاعاتی مانند کاربران، جلسات، صفحات بازدید شده، رویدادها، منابع ترافیک و دستگاه‌های کاربران را ذخیره و تحلیل کنید.**  
✅ **با این کوئری‌ها، می‌توانید الگوهای رفتاری کاربران را بررسی کرده و بینش‌های مفیدی کسب کنید.**

**⚡ آیا نیاز به بهینه‌سازی یا تغییر خاصی در این ساختار داری؟** 🚀