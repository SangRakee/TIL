# EC2 세팅

1. AMI 선택
   - Ubuntu, CentOS
2. 인스턴스 유형 선택
   - nano, micro(프로티어)

3. 인스턴스 세부 정보
   - 서브넷, 네트워크, IAM(권한 부여, root계정)
   - User date - 인스턴스를 생성할때 어떤 행동을 취할지 ex)리눅스 명령어
4. 스토리지 추가
5. 태크 추가
6. 보안 그룹 구성 
   - HTTP, SSH 및 포트
7. 키페어 세팅



EC2 Launch Template - 이미지, 키페어, 유형 , 보안그룹, 네크워크 설정을 미리 해놓은것





# Security Group

인스턴스에 대한 인바운드 및 아웃바운드 트래픽을 제어하는 가상 방화벽 역할

- 보안장치 : NACL와 함께 방화벽의 역할을 하는 서비스 
- Port 허용
- 인스턴스 단위 
  - 하나의 인스턴스에 하나 이상의 보안그룹 설정 가능
  - NACL의 경우 서브넷 단위

- stateful vs stateless





# ELB

트래픽을 여러 대상에 자동으로 분산시키는 것, 다양한 애플리케이션 부하를 처리할 수 있음

### 특징

1. IP가 지속적으로 바뀜, 따라서 도메인 기반으로 사용해야함
2. Health Check
   - 직접 트래픽을 발생시며 인스턴스가 살아있는지를 체크함

3. 세가지 종류
   - Application Load Balancer : Application Layer에서 작동하는것
   - Network Local Balancer : Network Layer인 TCP/IP에서 권장
   - Classic Load Balancer : 옛날 방식
4. Sticky Session
   - 관련 쿠키 세션을 해당 인스턴스에 저장하는 방식



### 실습

1. 두개 인스턴스 생성(다른 서브넷)
2. ELB 생성(Application Load Balancer)
   1. 이름, IP type, protocal, AZ(VPC)
   2. SG 설정(인스턴스랑 동일하게)
   3. Routing 설정 - Target group, Health Check
   4. 인스턴스 등록
3. 도메인으로 접속
4. Sticky Session 설정
   1. target group -> Attrubutes -> Edit



# Auto Scaling

애플리케이션을 모니터링하고 용량을 자동으로 조정하여, 최대한 **저렴한 비용**으로 **안정적**으로 성능 유지

### 실습

1. IAM 생성
2. S3 bucket 생성
3. auto scaling
   1. launch configuration - 인스턴스 
   2. auto scaling group 

4. Desired Capacity 설정 - Min,Max