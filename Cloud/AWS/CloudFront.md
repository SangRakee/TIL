# CloudFront

기능1) Cashe Server      기능2) CDN(Content Delivery Network)

웹서버의 부담을 줄이고, 전세계의 사용자들 대상으로 고속으로 컨텐츠를 제공하도록 하는 기능



클라이언트가 웹서버를 직접 만나는 것이 아닌 cloudFront가 웹 서버에게 요청함 그 이후로 부터는 웹서버는 놀고 클라이언트랑 cloudfront끼리만 통신한다



origin(web server), distribution(cloudfront)구조

1. distribution 생성
   - origin settings
2. 생성된 distributeion에 들어가면 domain 부분이 연결된 링크주소임
3. 캐시 수명 컨트롤 설정
4. Behaior

