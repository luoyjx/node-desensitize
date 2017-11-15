# node-desensitize

A tool for desensitizing information

## How does it work
```
                      node-desensitize

+--------------+      +--------------+      +--------------+
|              |      |              |      |              |
|    Origin    |      |   Transform  |      | Desensitized |
|              | +--> |              | +--> |              |
|    Words     |      |    Rules     |      |    Words     |
|              |      |              |      |              |
+--------------+      +--------------+      +--------------+

```

## Methods

* chineseName(fullName)
* idCardNum(id)
* fixedPhone(phone)
* mobilePhone(phone)
* address(address, sensitiveSize)
* email(email)
* bankCard(carNumber)
* password(pwd)
