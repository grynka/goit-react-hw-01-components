const ofline = {
  display: "block",
  width: 10,
  height: 10,
  borderRadius: "50%",
  backgroundColor: "red", 
  margin: "0 15px"
};

const online = {
  display: "block",
  width: 10,
  height: 10,
  borderRadius: "50%",
  backgroundColor: "green", 
  margin: "0 15px"
};

function FriendList({ items }) {
    return (
      <ul className="friend-list">
    {items.map(item =>
<li className="item" key={item.id}>
  <span className="status" style={item.isOnline ? online : ofline} ></span>
  <img className="avatar" src={item.avatar} alt="User avatar" width="48" />
  <p className="name">{item.name}</p>
</li>)}

</ul>);
}


export default FriendList