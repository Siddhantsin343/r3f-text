-OrbitControl
    -enableDamping

-TransformControl
    -object + useRef
   --OrbitControl + makedefault
    -mode -> rotate,scale,translate(default),

-PivotControl
    -anchore([0,0,0])
    -depthTest={false} for visiblity
    -lineWidth
    -axisecolor
    -scale
    -fixed={t/f}

-HTML
    -wrapperClass = "label"
    -distanceFactor={6..}
    -center
    -position={[1,1,0]}

-Text
    -color
    -fontSize
    -

-Float
    -floatintensity
    -speed
    
-MeshReflextioMaterial
    -mixblur
    -mirror
    resolution