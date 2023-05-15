# electron



webtsite : https://www.electronjs.org/


Electron is a framework for building desktop applications using JavaScript, HTML, and CSS.

### Quick Start

```sh
$ mkdir <dir>
$ cd <dir>
$ npm init
$ npm install --save-dev electron
```

### package.json의 script 수정

```sh
{
  "scripts": {
    "start": "electron ."
  }
}

````

### 실행
```sh
$ npm start
````

## 패키지 and 배포
패키지를 만들어주는t Tool은 아래와 같은 것들이 있으며, 원하는 것을 사용하면 된다.
- electron-forge
- electron-builder
- electron-packager

```sh
$ npm install --save-dev @electron-forge/cli
$ npx electron-forge import
$ npm run make
````
make 과정중 author , description등의 내용이 없으면 에러가 발생한다. 이런 경우 package.json 파일에서 해당 설정을 하여 주면 된다.

## 실행
make하면 실행 파일이 "<프로젝트 폴더>/out" 폴더에 생성된다. 