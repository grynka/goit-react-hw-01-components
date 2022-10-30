import {Friends, Status, Item} from "./FriendList.styled";

export function FriendList({ items }) {
    return (
      <Friends>
    {items.map(item =>
<Item key={item.id}>
  <Status type={item.isOnline.toString()}></Status>
  <img className="avatar" src={item.avatar} alt="User avatar" width="48" />
  <p className="name">{item.name}</p>
</Item>)}

</Friends>);
}


