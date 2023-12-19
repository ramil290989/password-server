# Описание
Данные о пользователях находятся в файле `./bin/users.json` в виде массива.
Объект `user` содержит следующие значения:
```
{
  id,
  name,
  password,  
}
```
Данные о паролях находятся в файле `./bin/passwords.json` в виде массива.
Объект `password` содержит следующие значения:
```
{
  id,
  userId,
  userName,
  password,
  header,
  description,
}
```

# Запросы и ответы
### Регистрация нового пользователя
#### Запрос:
```
path = '/api/signin'
regData = { username, password }
axios.post(path, regData)
```
#### Ответ:
`responseData = { username, token }`
#### Возможные ошибки:
Пользователь с таким именем уже существует
```
error: 'Conflict'
response.status = 409
```

### Авторизация
#### Запрос:
```
path = '/api/login'
loginData = { username, password }
axios.post(path, loginData)
```
#### Ответ:
`responseData = { username, token }`
#### Возможные ошибки:
Неправильный логин или пароль
```
error: 'Unauthorized'
response.status = 401
```

### Изменение пароля входа в систему
#### Запрос:
```
path = '/api/changeuserpassword'
authHeader = { headers: { Authorization: token } }
axios.post(path, { password, newPassword }, authHeader)
```
#### Ответ:
`response.status = 200`
#### Возможные ошибки:
Неправильный старый пароль
```
error: 'Unauthorized'
response.status = 401
```
Истекло время авторизации
```
error: 'Forbidden'
response.status = 403
```

### Добавление нового пароля
#### Запрос:
```
path = '/api/addpassword'
authHeader = { headers: { Authorization: token } }
values = { header, description, userName, password }
axios.post(path, values, authHeader)
```
#### Ответ:
`responseData = newPassword`
#### Возможные ошибки:
Истекло время авторизации
```
error: 'Forbidden'
response.status = 403
```

### Изменение добавленного пароля
#### Запрос:
```
path = '/api/editpassword'
authHeader = { headers: { Authorization: token } }
postData = { id, header, description, userName, password }
axios.post(path, postData, authHeader)
```
#### Ответ:
`response.status = 200`
#### Возможные ошибки:
Истекло время авторизации
```
error: 'Forbidden'
response.status = 403
```

### Удаление добавленного пароля
#### Запрос:
```
path = '/api/removepassword'
authHeader = { headers: { Authorization: token } }
axios.post(path, { id }, authHeader)
```
#### Ответ:
`response.status = 200`
#### Возможные ошибки:
Истекло время авторизации
```
error: 'Forbidden'
response.status = 403
```

### Загрузка добавленных паролей
#### Запрос:
```
path = '/api/data'
authHeader = { headers: { Authorization: token } }
axios.get(path, authHeader)
```
#### Ответ:
`responseData = userPasswords`
#### Возможные ошибки:
Истекло время авторизации
```
error: 'Forbidden'
response.status = 403
```