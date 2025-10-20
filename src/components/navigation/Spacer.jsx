export const Spacer = () =>{
    return (
        <div
        style={{
          height: window.innerWidth < 600 ? 50 : 15 , // mobile vs desktop
        }}
      />
    )
}