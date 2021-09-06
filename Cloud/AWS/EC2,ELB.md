# EC2 세팅

1. AMI 선택
   - Ubuntu, CentOS
2. 인스턴스 유형 선택
   - nano, micro(프로티어)

3. 인스턴스 세부 정보
   - 서브넷, 네트워크, IAM(권한 부여, root계정)
4. 스토리지 추가
5. 태크 추가
6. 보안 그룹 구성
   - HTTP, SSH 및 포트
7. 키페어 세팅



# ELB

1. target group(대상그룹) 설정

   - 이름, 프로토콜/포트 (여기서 포트는 대상그룹에 속해있는 인스턴스들의 포트), 상태검사
   - 대상 등록 (인스턴스 등록)

2. Load Balancer에 target group 등록

   - 타입 설정(application, network)
   - 이름
   - 리스너 설정(프로토콜, 포트)
   - 가용 영역(분산할 지역 설정)
   - 보안 설정 구성(ELB 방화벽) - 인스턴스 방화벽x

   - 라우팅 구성
   - target(대상) 등록

