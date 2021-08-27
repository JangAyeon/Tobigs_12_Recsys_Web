# 겜플리  
### 이미지・텍스트 기반 나만의 추천 게임플레이리스트  
2021.07.17 [제 12회 투빅스 빅데이터 컨퍼런스](https://user-images.githubusercontent.com/54944069/125618205-bd89b8de-3d78-4c22-b668-5b381af4c7c1.png) 발표작  
<table>
  <tr>
    <td align="left"><img src="https://user-images.githubusercontent.com/54944069/125945988-d7dce43b-fa28-47b3-90c6-ff401520ea74.png" width="720px" alt=""/></a></td>
  </tr>
</table>
  
Steam에서 제공하는 Multimodal 데이터를 다양한 방법으로 이용하여 **개인화된 추천 게임플레이리스트**를 제공하는 서비스입니다.

# 겜플리 API & 핵심 구현 기능
<table>
  <tr>
    <td align="left"><img src="https://user-images.githubusercontent.com/67853616/131106166-81612565-db3a-418e-a98f-60d43194a351.png" width="720px" alt=""/></a></td>
  </tr>
</table>

#### 겜플리 API 문서 : https://tobigs-game-reco.herokuapp.com/docs <br>
#### 기능 <br>
&nbsp;&nbsp;&nbsp;1. API로 받은 랜덤 20개 게임의 image, title, summary와 함께 게임 목록 구성 <br>
&nbsp;&nbsp;&nbsp;2. User가 게임 목록에서 선호하는 게임의 버튼을 누르면 해당 게임 ID를 API로 전달 <br>
&nbsp;&nbsp;&nbsp;3. 선택한 게임 ID에 해당하는 추천 게임 10개를 API로부터 받아옴 <br>
&nbsp;&nbsp;&nbsp;4. 추천 게임의 image, title, genre1, genre2와 함께 게임 추천 목록 구성  <br>

# 겜플리 웹
### 메인랜딩페이지
<table>
  <tr>
    <td align="left"><img src="https://user-images.githubusercontent.com/67853616/131102653-92b31d9c-76b5-47f1-b522-66b8b530b440.png" width="720px" alt=""/></a></td>
  </tr>
</table>


1. Header
>라우팅 이용 : <br>
>&nbsp;&nbsp;&nbsp;`Steam Game Recommender System` 클릭 -> 메인 홈으로 이동<br>
>&nbsp;&nbsp;&nbsp;`추천 받기` 클릭 ->  랜덤 20개의 Steam Game 목록 페이지로 이동

2. 랜딩 이미지
>동아리 로고와 프로젝트 주제를 담은 8 bit 컨셉의 랜딩 이미지 직접 제작<br>

3. Footer
>간략한 추천시스템 주제, 소속팀, 년도 명시


### 게임 목록 페이지

<table>
  <tr>
    <td align="left"><img src="https://user-images.githubusercontent.com/67853616/131104759-5be6d0d0-3208-4b92-acd3-e18b3000004d.png" width="720px" alt=""/></a></td>
  </tr>
</table>
<table>
  <tr>
    <td align="left"><img src="https://user-images.githubusercontent.com/67853616/131104977-181ebb13-4381-4e1d-89c4-9b00591de163.png" width="720px" alt=""/></a></td>
  </tr>
</table>
<table>
  <tr>
    <td align="left"><img src="https://user-images.githubusercontent.com/67853616/131105472-76388458-6ccd-4f61-92cd-f7526b382f01.png" width="720px" alt=""/></a></td>
  </tr>
</table>
<table>
  <tr>
    <td align="left"><img src="https://user-images.githubusercontent.com/67853616/131105755-c583bf06-a075-4ce7-819d-7b5bc4b711e3.png" width="720px" alt=""/></a></td>
  </tr>
</table>
