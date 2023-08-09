import { ParallaxLayer } from '@react-spring/parallax'

export default function Background() {
  return (
    <>
      <ParallaxLayer
        offset={0}
        speed={1}
        // style={{
        //   backgroundImage: `url(${})`,
        //   backgroundSize: 'fit',
        // }}
        factor={5}
      ></ParallaxLayer>
      <ParallaxLayer
        offset={3}
        speed={1}
        // style={{
        //   backgroundImage: `url(${})`,
        //   backgroundSize: 'cover',
        // }}
        factor={5}
      ></ParallaxLayer>
    </>
  )
}
