# Wine 환경에서 카카오톡 실행 시 `explorer.exe` 뜨지 않게 하는 법

:::info
Ubuntu 22.04 LTS  
wine 10.0
:::

![alt text](image-1.png)

리눅스 GNOME 환경에서 wine을 통해 카카오톡을 사용하다 보면, 실행할 때마다 정체를 알 수 없는 하얀색 `explorer.exe` 창이 함께 떠서 일일이 닫아줘야 하는 번거로움이 있습니다. 이는 본래 윈도우 작업 표시줄에 작게 뜨는 카카오톡 아이콘에 해당하는 것으로, 눌러서 빠르게 카카오톡 창에 접근할 수 있는 기능을 제공합니다. 하지만 wine은 우분투 환경에서 이를 구현하기 위해 Wine explorer의 별도의 창을 띄우는 방식을 채택하였는데, 사실 저와 같은 일반 사용자들에게는 매번 이 창을 닫아줘야 해서 거슬림으로 다가왔습니다.

`.desktop` 파일을 수정해서 shell 스크립트를 불러오게 하여 `pkill explorer.exe`로 프로세스를 죽여버리는 방법도 있겠지만, 이렇게 하면 우분투와 wine 환경 사이의 클립보드 복사/붙여넣기가 작동하지 않게 됩니다. 따라서 쉘 스크립트를 활용해 프로세스는 유지하면서 창만 자동으로 닫는 방법을 소개하려 합니다.

## 1. 사전 준비

창 제어 도구인 `wmctrl`이 필요합니다. 터미널에서 아래 명령어로 설치해 주세요.

```bash
sudo apt update && sudo apt install wmctrl -y
```

## 2. 자동 실행 및 창 닫기 스크립트 작성

사용자 홈 디렉토리에 `start_kakao.sh` 파일을 만들고 아래 내용을 복사해 넣습니다. 파일명은 아무거나 해도 상관없습니다.

```bash
#!/bin/bash

# 1. Wine 환경 변수 선언
export WINEPREFIX="/home/사용자명/.wine"
export WINEDEBUG="-all,err-all"

# 2. 카카오톡 실행 (nohup으로 프로세스 보호 및 로그 무시)
nohup wine "/home/사용자명/.wine/drive_c/Program Files/Kakao/KakaoTalk/KakaoTalk.exe" > /dev/null 2>&1 &

# 3. 창이 생성될 때까지 대기 (시스템 사양에 따라 5~7초 권장)
sleep 6

# 4. explorer.exe 프로세스를 찾아서 '창'만 닫기
# pkill 대신 wmctrl을 사용하여 클립보드와 트레이 기능을 보존합니다.
EXP_PID=$(pgrep explorer.exe)

if [ ! -z "$EXP_PID" ]; then
    # 창 ID를 찾아 닫기(-c) 신호를 보냄 (X 버튼 누름과 동일 효과)
    wmctrl -lp | grep "$EXP_PID" | awk '{print $1}' | xargs -I{} wmctrl -i -c {}
fi

exit 0
```

## 3. 스크립트 실행 권한 부여

파일을 저장했다면, 실행이 가능하도록 권한을 줍니다. 앞에서 작성한 쉘 파일명으로 진행해 주시면 됩니다.

```bash
chmod +x ~/start_kakao.sh
```

## 4. `.desktop` 파일에 적용 (아이콘 클릭 시 실행되도록)

이제 앱 서랍의 카카오톡 아이콘을 눌렀을 때 이 스크립트가 실행되도록 수정합니다. 보통 `~/.local/share/applications/wine/Programs` 폴더 내에 카카오톡 관련 `.desktop` 파일이 있습니다.

해당 파일을 열어 `Exec` 라인을 다음과 같이 수정합니다.

```ini
Exec=/home/사용자명/start_kakao.sh
```

## 마치며

이 방법을 사용하면 리눅스에서도 윈도우와 다름없는 쾌적한 카카오톡 환경을 누릴 수 있습니다. 핵심은 프로세스(PID)를 찾아 창(Window ID)만 타격하는 것입니다.

이제 더 이상 거슬리는 빈 창을 직접 닫지 마세요.

## 💡 팁 하나 더

스크립트를 실행했는데도 창이 안 닫힌다면 `sleep 6` 부분의 숫자를 조금 더 늘려보세요. 값이 너무 크면 창이 닫히는 데 딜레이가 발생하고, 값이 너무 작으면 창이 열리기도 전에 명령어가 지나가버릴 수도 있기 때문입니다.