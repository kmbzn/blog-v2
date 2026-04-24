# 리눅스 GRUB 폰트 크기 조절

:::info
Ubuntu 26.04 LTS  
wine 11.0
:::

우분투에서 가독성 좋은 비트맵 폰트인 **Terminus** 폰트를 사용하여 GRUB 메뉴 폰트 크기를 `32pt`로 키우는 방법입니다.

## 실행 스크립트
아래 명령어를 터미널에 순서대로 입력하거나, 스크립트 파일로 만들어 실행하세요.

```bash
# 1. 폰트 설치
sudo apt update
sudo apt install -y fonts-terminus

# 2. 폰트 버전에 상관없이 32pt 폰트 생성
sudo grub-mkfont -s 32 -o /boot/grub/fonts/terminus32.pf2 /usr/share/fonts/truetype/terminus/TerminusTTF-*.ttf

# 3. GRUB 설정 파일 자동 업데이트
sudo sed -i '/^GRUB_FONT=/d; $a GRUB_FONT="/boot/grub/fonts/terminus32.pf2"' /etc/default/grub

# 4. 설정 반영 및 재부팅
sudo update-grub
sudo reboot
```

## 요약
1. `fonts-terminus` 패키지 설치
2. `grub-mkfont`를 통해 32pt 크기의 `.pf2` 파일 생성
3. `/etc/default/grub` 파일에 폰트 경로 지정
4. `update-grub`으로 설정 적용