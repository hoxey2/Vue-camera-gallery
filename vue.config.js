module.exports = {
  pwa: {
    // 서비스워커를 코드로 수정하기 위해 InjectManifest 모드 사용
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // Injectmanifest 모드에서는 서비스 워커 파일 지정 필수
      swSrc: "./src/service-worker.js"
    }
  }
}