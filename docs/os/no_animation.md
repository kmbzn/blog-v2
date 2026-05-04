# Ubuntu 26.04 윈도우 애니메이션 끄기

우분투 26.04를 설치한 후 시스템이 묘하게 무겁거나, 더 빠릿한 창 전환을 원하신다면 **애니메이션 효과**를 끄는 것을 시도해볼 수 있습니다. 특히 GNOME 50에서는 달라진 부분이 있으므로 아래 가이드를 따라 주세요.

:::warning
**Just Perfection** 확장이 활성화되어 있거나 설정이 적용되지 않을 수 있습니다.  
이 때는 별도로 앱 안에서 설정해 주셔야 합니다.
:::

아래 명령어를 터미널에 입력하시면 됩니다.

```sh
gsettings set org.gnome.desktop.interface enable-animations false
```