## Redux-Cart
## Deployment Vercle: https://redux-cart-xi.vercel.app/

### Firebase, Redux, Redux-Toolkit를 사용하여 물건을 Cart에 담고 삭제하는 프로젝트를 만들어봤습니다.

### Technology
- Redux
    - useDispatch
    - useSelector
    Provider ( index.js )
- Redux-Toolkit
    - createSlice
    - configureStore

```
store의 구성은 Redux-Toolkit인 createSlice를 사용하여 관리 했습니다.
index = 최상위 ( configureStore )
- cart를 더하고 빼는 로직은 productItem.js, ( createSlice )
- firebase에 fetch 요청로직은 cart-actions.js ( createSlice )
- cart 장바구니를 숨기고 보여주는 로직은 cart.js ( createSlice )
```
<img width="209" alt="image" src="https://user-images.githubusercontent.com/96061695/183241165-92ad692d-1026-4666-a03e-d52b6b5f9011.png">


<img width="1255" alt="image" src="https://user-images.githubusercontent.com/96061695/183240631-787cb484-1b3a-433b-a6bf-28ba97eb48a2.png">
<img width="1252" alt="image" src="https://user-images.githubusercontent.com/96061695/183240638-5458ad0c-e1e3-48e5-b5fb-b1da94ae3b7e.png">
<img width="1239" alt="image" src="https://user-images.githubusercontent.com/96061695/183240662-daca57c1-24d8-4b2f-96b7-c749285b7f17.png">
<img width="1239" alt="image" src="https://user-images.githubusercontent.com/96061695/183240673-77a337a5-1de2-46db-b0db-429a09100fb4.png">
