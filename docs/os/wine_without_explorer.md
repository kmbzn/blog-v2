# Wine 환경에서 카카오톡 실행 시 `explorer.exe` 뜨지 않게 하는 법

:::info
Ubuntu 22.04 LTS  
wine 11.0
:::

![](explorer.webp)

리눅스 GNOME 환경에서 wine을 통해 카카오톡을 사용하다 보면, 실행할 때마다 정체를 알 수 없는 `explorer.exe` 창이 함께 떠서 일일이 닫아줘야 하는 번거로움이 있습니다. 이는 본래 윈도우 작업 표시줄에 작게 뜨는 카카오톡 아이콘에 해당하는 것으로, 눌러서 빠르게 카카오톡 창에 접근할 수 있는 기능을 제공합니다. 하지만 wine은 우분투 환경에서 이를 구현하기 위해 Wine explorer의 별도의 창을 띄우는 방식을 채택하였는데, 저에게는 매번 이 창을 닫아줘야 해서 거슬림으로 다가왔습니다.

`.desktop` 파일을 수정해서 shell 스크립트를 불러오게 하여 `pkill explorer.exe`로 프로세스를 죽여버리는 방법도 있겠지만, 이렇게 하면 우분투와 wine 환경 사이의 클립보드 복사/붙여넣기가 작동하지 않게 됩니다. 따라서 쉘 스크립트를 활용해 프로세스는 유지하면서 창만 자동으로 닫는 방법을 소개하려 합니다.

## 1. 사전 준비

창 제어 도구인 `wmctrl`이 필요합니다. 터미널에서 아래 명령어로 설치해 주세요.

```bash
sudo apt update && sudo apt install wmctrl -y
```

## 2. 자동 실행 및 창 닫기 스크립트 작성

`start.sh` 파일을 만들고 아래 내용을 복사해 넣습니다. 파일명 및 경로는 아무거나 해도 상관없습니다.

```bash
#!/bin/bash
export WINEPREFIX="/home/kmbzn/.wine"
export WINEDEBUG="-all,err-all"

# 카카오톡 실행
nohup wine "/home/kmbzn/.wine/drive_c/Program Files/Kakao/KakaoTalk/KakaoTalk.exe" > /dev/null 2>&1 &

# 창 감지 및 제거 루프
while true; do
    # explorer.exe의 PID 찾기
    EXP_PID=$(pgrep explorer.exe)

    if [ ! -z "$EXP_PID" ]; then
        # wmctrl로 해당 PID를 가진 윈도우 ID(WID)가 있는지 확인
        # grep -w로 정확히 해당 PID만 매칭
        WID=$(wmctrl -lp | grep -w "$EXP_PID" | awk '{print $1}')

        if [ ! -z "$WID" ]; then
            # 창이 발견되면 닫기 명령 전달
            wmctrl -i -c "$WID"
            # 목적을 달성했으므로 루프 종료
            break
        fi
    fi

    # 대기 후 다시 확인
    sleep 1
done

exit 0
```

## 3. 스크립트 실행 권한 부여

파일을 저장했다면, 실행이 가능하도록 권한을 부여합니다. 앞에서 작성한 쉘 파일명으로 진행해 주시면 됩니다.

```bash
chmod +x ~/start.sh
```

## 4. `.desktop` 파일에 적용 (아이콘 클릭 시 실행되도록)

이제 앱 서랍의 카카오톡 아이콘을 눌렀을 때 이 스크립트가 실행되도록 수정합니다. 보통 `~/.local/share/applications/wine/Programs` 폴더 내에 카카오톡 관련 `.desktop` 파일이 있습니다.

해당 파일을 열어 `Exec` 라인을 다음과 같이 수정합니다.

```ini
Exec=/home/사용자명/start.sh
```

## 마치며

이 방법을 사용하면 리눅스에서도 윈도우와 다름없는 쾌적한 카카오톡 환경을 누릴 수 있습니다. 핵심은 프로세스(PID)를 찾아 창(Window ID)만 타격하는 것입니다.

이제 더 이상 거슬리는 창을 일일히 직접 닫지 마세요.