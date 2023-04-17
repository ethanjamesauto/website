const Box = ({icon, title, buttonTitle, color}) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '20px', backgroundColor: color , width : "15vw", minWidth: "200px", margin : "20px"}}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: '80px', color: '#61dafb', marginBottom: '5px' }}>
          {icon}
        </div>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>{title}</h3>
        <button style={{ backgroundColor: '#61dafb', color: '#fff', border: 'none', borderRadius: '4px', padding: '10px 20px', }}>{buttonTitle}</button>
      </div>
    </div>
  );
};

export default Box;