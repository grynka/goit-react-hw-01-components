function FriendList({ items }) {
    return (
      <ul className="friend-list">
    {items.map(item =>
<li className="item" key={item.id}>
  <span className="status" style={{backgroundColor: {item.isOnline ? "green" : "red"}}} ></span>
  <img className="avatar" src={item.avatar} alt="User avatar" width="48" />
  <p className="name">{item.name}</p>
</li>)}

</ul>);
}


export default FriendList