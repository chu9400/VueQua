# AquaShop 프로젝트



## 목차 
### 1. 개요
### 2. 사용언어 및 사용법
### 3. 시스템 구성도
### 4. 고집했던 부분
### 5. 제작하며 학습한 부분

## 1. 개요 
 - 본 프로젝트는 Vue언어 학습용 프로젝트이다.
 - 사이트 주소 : https://vuequa.surge.sh/
 
## 2. 사용언어 및 사용법
    - Vue
    - 최신 Nodejs 설치

## 3. 시스템 구성도
    - ㅁㄴㅇ
    - surge 배포
    - 

## 4. 고집했던 부분
    SPA 

## 5. 제작하며 학습한 부분

#### - toLocaleString();
    Contents.vue에서 
    <p class="price-text">{{getData[i].price}}</p>

    해당 코드 출력시 15000 이런 식으로 나와 보기 불편했으나
    <p class="price-text">{{getData[i].price.toLocaleString()}}</p>
    이런식으로
    price.toLocaleString() 추가하여 15,000 식으로 나오게 수정.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
