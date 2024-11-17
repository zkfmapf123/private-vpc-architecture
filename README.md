# 폐쇄망 전략

## Rule

- Public Subnet 없음 (EntryPoint-VPC 만 존재함)
- Private Subnet으로만 구성

![vpc](./public/vpc.png)

## Private Subnet 내 구성되어있는 EC2 SSM 접근하기 (완료)

- ssm 관련 endpoint를 구성해야 함
- ssm endpoint sg를 추가하는것을 잊지말자... ( 필요하다면 EC2 Instance Connect Endpoint 구성하자)

![ssm](./public/ssm.png)
![endpoisnt-sg](./public/ep-sg.png)
![ec2-connect](./public/ec2-connect.png)

## API-Gateway가 Private Subnet에 통신하는 방법 (VPC Link) (완료)

![api-gw](./public/api-gw-link.png)
![gw-lb](./public/gw-alb.png)
![alb-inte](./public/alb-inte.png)

## API-Gateway 에서 통신하는 방법

![api-gw](./public/api-gateway.png)

## Private link 구성 하는 법

- NLB를 미리 구성해놓자...

![private-link-1](./public/private-link1.png)
![private-link-2](./public/private-link2.png)

- 다른 VPC에서 vpc endpoint를 사용하자

![private-link-3](./public/private-link3.png)
![private-link-4](./public/api-gateway-2.png)
![private-link-5](./public/private-link5.png)
