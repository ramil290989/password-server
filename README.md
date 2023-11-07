## Login
#### Request
```
path = '/api/login'
loginData = { username: 'admin', password: 'password' }
axios.post(path, loginData)
```
#### Response
`responseData = { username, token }`
#### Errors
error Unauthorized (incorrect username or password)
`response.status = 401`

## SignIn
#### Request
```
path = '/api/signin'
loginData = { username: 'admin', password: 'password' }
axios.post(path, loginData)
```
#### Response
`responseData = { username, token }`
#### Errors
error Conflict (this username already exists)
`response.status = 409`

## Get passwords
#### Request
```
path = '/api/data'
authHeader = { headers: { Authorization: secretToken } }
axios.get(path, authHeader)
```
#### Response
Array of user passwords
```
responseData = [
  {
    "id": 1,
    "userId": 1,
    "header": "Password manager",
    "description": "Admin password of password manager",
    "userName": "admin",
    "password": "admin"
  },
  ...
]
```
#### Errors
error Forbidden (the token is invalid or the token has expired)
`response.status = 403`

## Add new password
#### Request
```
path=/api/addpassword`
authHeader = { headers: { Authorization: secretToken } }
newPassword = {
  "header":"New password",
  "description":"Admin awesome password",
  "userName":"admin_new",
  "password":"admin_new"
}

axios.get(path, newPassword, authHeader)
```
#### Response
Responsed new password
```
responseData = {
  "id": 2,
  "userId": 1,
  "header": "awesome service",
  "description": "Admin password of awesome service",
  "userName": "admin",
  "password": "admin"
}
```
#### Errors
error Forbidden (the token is invalid or the token has expired)
`response.status = 403`

## Change password
#### Request
```
path=/api/changepassword`
authHeader = { headers: { Authorization: secretToken } }
passwordData = {
  "id": 1,
  "description": "Admin awesome password change",
  "userName": "admin_change",
}

axios.get(path, passwordData, authHeader)
```
#### Response
Responsed changed password
```
responseData = {
  "id": 1,
  "userId": 1,
  "header": "awesome service",
  "description": "Admin awesome password change",
  "userName": "admin_change",
  "password": "admin"
}
```
#### Errors
error Forbidden (the token is invalid or the token has expired)
`response.status = 403`

## Remove password
#### Request
```
path=/api/removeepassword`
authHeader = { headers: { Authorization: secretToken } }
removeData = { "id": 1 }

axios.get(path, removeData, authHeader)
```
#### Response
Responsed string
```
responseData = 'password id=${id} removed'
```
#### Errors
error Forbidden (the token is invalid or the token has expired)
`response.status = 403`