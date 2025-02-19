# TagManager SQL Structure

Google Tag Manager (GTM) is a tool that allows users to manage and deploy marketing tags (e.g., tracking pixels, analytics scripts) on a website or app without modifying the code directly. Below is a basic SQL schema design for a system similar to Google Tag Manager.

---

### **SQL Schema for Tag Management System**

#### 1. **Users Table**
Stores information about the users of the tag management system.
```sql
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

#### 2. **Accounts Table**
Represents an account in the system (e.g., a company or organization).
```sql
CREATE TABLE accounts (
    account_id INT PRIMARY KEY AUTO_INCREMENT,
    account_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

#### 3. **Containers Table**
A container holds tags, triggers, and variables for a specific website or app.
```sql
CREATE TABLE containers (
    container_id INT PRIMARY KEY AUTO_INCREMENT,
    account_id INT NOT NULL,
    container_name VARCHAR(255) NOT NULL,
    domain VARCHAR(255) NOT NULL, -- Domain or app identifier
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (account_id) REFERENCES accounts(account_id) ON DELETE CASCADE
);
```

---

#### 4. **Tags Table**
Stores the tags (e.g., Google Analytics, Facebook Pixel) to be deployed.
```sql
CREATE TABLE tags (
    tag_id INT PRIMARY KEY AUTO_INCREMENT,
    container_id INT NOT NULL,
    tag_name VARCHAR(255) NOT NULL,
    tag_type ENUM('analytics', 'advertising', 'custom') NOT NULL,
    tag_code TEXT NOT NULL, -- JavaScript or HTML code for the tag
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (container_id) REFERENCES containers(container_id) ON DELETE CASCADE
);
```

---

#### 5. **Triggers Table**
Defines when a tag should fire (e.g., on page load, on click).
```sql
CREATE TABLE triggers (
    trigger_id INT PRIMARY KEY AUTO_INCREMENT,
    container_id INT NOT NULL,
    trigger_name VARCHAR(255) NOT NULL,
    trigger_type ENUM('pageview', 'click', 'form_submit', 'custom_event') NOT NULL,
    trigger_conditions JSON, -- Conditions for firing the trigger
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (container_id) REFERENCES containers(container_id) ON DELETE CASCADE
);
```

---

#### 6. **Tag-Trigger Mapping Table**
Maps tags to triggers (many-to-many relationship).
```sql
CREATE TABLE tag_trigger_mapping (
    tag_id INT NOT NULL,
    trigger_id INT NOT NULL,
    PRIMARY KEY (tag_id, trigger_id),
    FOREIGN KEY (tag_id) REFERENCES tags(tag_id) ON DELETE CASCADE,
    FOREIGN KEY (trigger_id) REFERENCES triggers(trigger_id) ON DELETE CASCADE
);
```

---

#### 7. **Variables Table**
Stores variables used in tags and triggers (e.g., dynamic values like user ID or page URL).
```sql
CREATE TABLE variables (
    variable_id INT PRIMARY KEY AUTO_INCREMENT,
    container_id INT NOT NULL,
    variable_name VARCHAR(255) NOT NULL,
    variable_type ENUM('constant', 'javascript', 'url', 'cookie') NOT NULL,
    variable_value TEXT, -- Value or JavaScript code to generate the value
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (container_id) REFERENCES containers(container_id) ON DELETE CASCADE
);
```

---

#### 8. **Versions Table**
Tracks versions of container configurations for rollback or auditing.
```sql
CREATE TABLE versions (
    version_id INT PRIMARY KEY AUTO_INCREMENT,
    container_id INT NOT NULL,
    version_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (container_id) REFERENCES containers(container_id) ON DELETE CASCADE
);
```

---

#### 9. **Version Snapshots Table**
Stores the state of tags, triggers, and variables for a specific version.
```sql
CREATE TABLE version_snapshots (
    snapshot_id INT PRIMARY KEY AUTO_INCREMENT,
    version_id INT NOT NULL,
    tag_id INT,
    trigger_id INT,
    variable_id INT,
    snapshot_data JSON, -- Stores the configuration of the tag, trigger, or variable
    FOREIGN KEY (version_id) REFERENCES versions(version_id) ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES tags(tag_id) ON DELETE SET NULL,
    FOREIGN KEY (trigger_id) REFERENCES triggers(trigger_id) ON DELETE SET NULL,
    FOREIGN KEY (variable_id) REFERENCES variables(variable_id) ON DELETE SET NULL
);
```

---

#### 10. **Publishing Table**
Tracks when a container version is published to a live environment.
```sql
CREATE TABLE publishing (
    publish_id INT PRIMARY KEY AUTO_INCREMENT,
    version_id INT NOT NULL,
    published_by INT NOT NULL, -- User who published the version
    published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (version_id) REFERENCES versions(version_id) ON DELETE CASCADE,
    FOREIGN KEY (published_by) REFERENCES users(user_id) ON DELETE CASCADE
);
```

---

### **Indexes**
Add indexes to improve query performance:
```sql
CREATE INDEX idx_containers_account_id ON containers(account_id);
CREATE INDEX idx_tags_container_id ON tags(container_id);
CREATE INDEX idx_triggers_container_id ON triggers(container_id);
CREATE INDEX idx_variables_container_id ON variables(container_id);
CREATE INDEX idx_version_snapshots_version_id ON version_snapshots(version_id);
```

---

### **Example Queries**

1. **Get all tags for a container:**
```sql
SELECT tag_name, tag_type, tag_code
FROM tags
WHERE container_id = 1;
```

2. **Get all triggers for a specific tag:**
```sql
SELECT triggers.trigger_name, triggers.trigger_type
FROM triggers
JOIN tag_trigger_mapping ON triggers.trigger_id = tag_trigger_mapping.trigger_id
WHERE tag_trigger_mapping.tag_id = 1;
```

3. **Get the latest published version for a container:**
```sql
SELECT versions.version_name, publishing.published_at
FROM versions
JOIN publishing ON versions.version_id = publishing.version_id
WHERE versions.container_id = 1
ORDER BY publishing.published_at DESC
LIMIT 1;
```

4. **Get all variables for a container:**
```sql
SELECT variable_name, variable_type, variable_value
FROM variables
WHERE container_id = 1;
```

---

This schema provides a foundation for building a tag management system. You can extend it with additional features like user permissions, audit logs, or integrations with third-party platforms. Let me know if you need further assistance!