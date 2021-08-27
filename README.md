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
#### 사용 언어 : <br>

<table>
  <tr>
    <td align="left"><img src="https://img.shields.io/badge/-HTML5-313131?style=flat-square&labelColor=313131&logo=html5&logoColor=white&color=313131" width="100px" alt=""/></a>   </td>
    <td align="left"><img src="https://img.shields.io/badge/-CSS3-313131?style=flat-square&labelColor=313131&logo=css3&logoColor=white&color=313131" width="100px" alt=""/></a></td>
     <td align="left"><img src="https://img.shields.io/badge/-React-313131?style=flat-square&labelColor=313131&logo=react&logoColor=white&color=313131" width="100px" alt=""/></a></td>
     <td align="left"><img src="https://img.shields.io/badge/-Javascript-313131?style=flat-square&labelColor=313131&logo=javascript&logoColor=white&color=313131" width="100px" alt=""/></a></td>
  </tr>
</table>

#### 기능 <br>
&nbsp;&nbsp;&nbsp;1. API로 받은 랜덤 20개 게임의 image, title, summary와 함께 게임 목록 구성 <br>
&nbsp;&nbsp;&nbsp;2. User가 게임 목록에서 선호하는 게임의 버튼을 누르면 해당 게임 ID를 API로 전달 <br>
&nbsp;&nbsp;&nbsp;3. 선택한 게임 ID에 해당하는 추천 게임 10개를 API로부터 받아옴 <br>
&nbsp;&nbsp;&nbsp;4. 추천 게임의 image, title, genre1, genre2와 함께 게임 추천 목록 구성  <br>

# 겜플리 웹
### 메인 랜딩 페이지
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

1. Loading : class component 기반 ver
>**state**에 **isLoading**, **data**, **cmd** 속성 **defualt** 값 정의<br>
>**render**에서 **this.state** 불러오고 **async**와 **await**와 **axios.get** 이용해 랜덤으로 게임 받는 API 호출<br>
>API로부터 data를 다 받기 전까지 **isLoading**이 **true** 값으로 화면에 `Loading...` 띄우기<br>

<table>
  <tr>
    <td align="left"><img src="https://user-images.githubusercontent.com/67853616/131104977-181ebb13-4381-4e1d-89c4-9b00591de163.png" width="720px" alt=""/></a></td>
  </tr>
</table>

2. 랜덤 게임 목록 : class component & hook 기반 ver
>**componentDidMount**는 component 만들어지고 rendering 완료되며 실행됨 <br>
>**isLoading**이 **false** 값로 바뀌면서 게임들이 **map**으로 한개씩 image, title, summary 칸에 맵핑됨 



<table>
  <tr>
    <td align="left"><img src="https://user-images.githubusercontent.com/67853616/131105472-76388458-6ccd-4f61-92cd-f7526b382f01.png" width="720px" alt=""/></a></td>
  </tr>
</table>

3. 랜덤 게인 선택 : 
>click, hover 하면 button의 스타일 속성 변경<br>
>해당 게임 클릭 시 게임 ID 전달하여 해당 게임에 맞는 게임 추천 목록 받아오기<br>
```
<Link to={`/recos/${data.game_id}`}>
```



### 게임 추천 페이지

<table>
  <tr>
    <td align="left"><img src="https://user-images.githubusercontent.com/67853616/131105755-c583bf06-a075-4ce7-819d-7b5bc4b711e3.png" width="720px" alt=""/></a></td>
  </tr>
</table>

1. **GetDetail** : hook ver
>**useParams**로 게임 목록 페이지에서 사용자가 선택한 게임의 고유 ID 받아오기<br>
>**useEffect**, **useState**로 해당 ID에 맞는 추천 게임들 받는 API 호출해 Mount하기<br>
>return에서는 게임들이 Mount되면 map으로 게임 한 개에 대한 title, image, summary, genre1, genre2를 각각 변수에 할당해 **GetRecList**의 props로 전달<br>
2. **GetRecList**
>props로 받아 온 title, image, summary, genre1, genre2를 적절한 html 속성에 맞춰 게임 추천 목록 구성 <br>


# 시연 영상
[1] https://github.com/JangAyeon/Tobigs_12_Recsys_Web/blob/master/Steam%20Game%20Recommender%20System%20-%20Chrome%202021-07-16%2017-47-13.mp4
