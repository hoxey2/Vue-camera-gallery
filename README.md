# camera_app


## DB 정보 입력
```
src > datasources > firebase.js

databaseURL: "",  <-- 본인 URL 입력
storageBucket: "",  <-- 본인 URL 입력

```

## 포스트용 json 파일
```
picture-data.js 수정해서 사용
```

## 캡처 이미지 캐시 파일 만들기
```
service-worker.js 수정해서 사용

new RegExp('https://firebasestorage.googleapis.com/v0/b/본인 파이어베이스의 storageBucket 주소 입력/.*'),
```



### 미리보기
```
npm run serve
```

### 업로드용 파일로 빌드
```
npm run build
```

### 빌드한 파일 미리보기
```
serve dist
```