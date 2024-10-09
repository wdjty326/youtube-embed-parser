# youtube-embed-parser
AWS에서 유튜브 영상 크롤링을 하기 위한 Lambda serverless 프로젝트입니다.

## Getting Started
Node 버전은 `.nvmrc` 에서 확인해주세요. nvm 이 설치되있다면 버전을 변경해주세요.
```bash
# (선택사항) 버전이 설치되지 않은 경우 실행
nvm install

# 버전 변경
nvm use
```

Serverless V4 환경에서 개발하였기에 Serverless 버전을 v4 로 업데이트 부탁드립니다.
```bash
# 버전을 확인합니다.
sls version

# 버전이 낮다면 업데이트합니다.
sls update
```

패키징 관리는 pnpm 을 사용하였습니다. 
```bash
# Windows(Powershell)
Invoke-WebRequest https://get.pnpm.io/install.ps1 -UseBasicParsing | Invoke-Expression

# 리눅스
wget -qO- https://get.pnpm.io/install.sh | sh -

# 필요한 패키지를 다운받습니다.
pnpm install
```

AWS 에 업로드하기 위해선 `aws configure` 에 인증정보가 있어야합니다.
[AWS CLI 설치하기](https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/getting-started-install.html#getting-started-install-instructions) 

설치되었다면 aws 명령어를 통해 인증정보를 적용합니다. 계정 설정은 aws의 `IAM Console > 사용자` 에서 가능합니다.
```bash
aws configure

# 각 설정에 맞는 항목 입력
AWS Access Key ID [****************VBH7]:
AWS Secret Access Key [****************G9TR]:
Default region name [ap-northeast-2]:
Default output format [json]:
```

## 명령어

테스트 코드를 실행합니다. 테스트 코드는 `test/**/*.spec.ts` 에 있는 파일들을 참고합니다.
```bash
pnpm test
```

배포를 진행합니다.
```bash
pnpm deploy
```

로컬에서 테스트를 진행합니다.
```bash
pnpm start
```