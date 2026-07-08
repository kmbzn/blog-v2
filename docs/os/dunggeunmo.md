# 리눅스 우분투 GRUB 폰트 변경 (둥근모꼴 + Fixedsys)

우분투에서 **둥근모꼴 + Fixedsys** 폰트를 사용하여 GRUB 메뉴 폰트를 가독성 좋게 변경하는 방법을 소개하고자 합니다.

해당 폰트는 [길형진](https://cactus.tistory.com/) 님께서 둥근모꼴 폰트의 한글 소스와 Fixedsys 폰트를 결합하여 배포하신 폰트이며, GRUB 메뉴 폰트로 사용하기에 가독성이 매우 좋아 본 가이드에 포함했습니다.

- 폰트 출처: [CACTUS 블로그 (길형진 님)](https://cactus.tistory.com/193)

## 실행 스크립트
아래 명령어를 터미널에 입력하거나, 스크립트 파일로 만들어 실행해볼 수 있습니다. 전체 복사해서 터미널에 붙여넣기(`Ctrl + Shift + V`)하고 실행해도 됩니다.

```sh
# 1. 폰트 저장 폴더 생성 및 다운로드 (블로그 첨부파일 기준)
sudo mkdir -p /usr/share/fonts/truetype/dunggeunmo
sudo wget -O /usr/share/fonts/truetype/dunggeunmo/DungGeunMo_TTF.zip "https://blog.kakaocdn.net/dna/wToso/btq7WvNj9LT/AAAAAAAAAAAAAAAAAAAAAE6bXoKVQtq21qU5DZbXA-bYViIhHmHLugerP_ubateD/DungGeunMo%20TTF.zip?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1785509999&allow_ip=&allow_referer=&signature=eTt45%2FiDWXvl5W%2BbbAPbPOpXfAQ%3D&attach=1&knm=tfile.zip"

# 2. 압축 해제 패키지 설치 및 압축 해제
sudo apt install -y unzip
sudo unzip -j -o /usr/share/fonts/truetype/dunggeunmo/DungGeunMo_TTF.zip -d /usr/share/fonts/truetype/dunggeunmo/
sudo rm /usr/share/fonts/truetype/dunggeunmo/DungGeunMo_TTF.zip

# 3. 32pt의 GRUB용 비트맵 폰트 생성
sudo grub-mkfont -s 32 -o /boot/grub/fonts/dunggeunmo32.pf2 /usr/share/fonts/truetype/dunggeunmo/DungGeunMo.ttf

# 4. GRUB 설정 파일 자동 업데이트
sudo sed -i '/^GRUB_FONT=/d; $a GRUB_FONT="/boot/grub/fonts/dunggeunmo32.pf2"' /etc/default/grub

# 5. 설정 반영 및 재부팅
sudo update-grub
sudo reboot
```

## 요약
1. `/usr/share/fonts/truetype/dunggeunmo` 경로에 `DungGeunMo_TTF.zip` 다운로드 및 압축 해제
2. `grub-mkfont`를 통해 32pt 크기의 `dunggeunmo32.pf2` 파일 생성
3. `/etc/default/grub` 파일에 폰트 경로(`GRUB_FONT`) 지정
4. `update-grub`으로 설정 적용