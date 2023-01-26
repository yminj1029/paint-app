import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useObserver } from 'mobx-react-lite';
import paintStore from '../stores/paintStore';

const PageContent = styled.div`
  width:800px;
  height:700px;
`;
export default function Contents() {
  const [rectangle, setRectangle] = useState({x : 0,y :0, width:50, height:50});
  
  const handleMouse= (event) => {
    if (paintStore.paintTool === 'box') {
      createRect(event.offsetX, event.offsetY)
    }
  }
  const createRect = (x, y) => {
    setRectangle({x:x, y:y, width:50, height:50})
  }
  const refContainer = useRef(document.createElement('div'))
  useEffect(() => {
    const currentTarget = refContainer.current
    refContainer.current.addEventListener('mousedown',handleMouse)
 
    return () => {
      currentTarget.removeEventListener('mousedown', handleMouse)
      }
    })
    
  return useObserver(() => (
    <PageContent
      ref={refContainer}
    >
      <svg viewBox='0 0 800 700'>
        <rect x= {rectangle.x} y={rectangle.y}
            width ={rectangle.width} height={rectangle.height}
            stroke="red"
            fill ="transparent"
            strokeWidth="2"
        />
        <rect
           x= {rectangle.x-2} y={rectangle.y-2}
          width="5"
          height="5"
        />
        <rect
           x= {rectangle.x+rectangle.width-2} y={rectangle.y-2}
          width="5"
          height="5"
        />
        <rect
           x= {rectangle.x + rectangle.width-2} y={rectangle.y +rectangle.height-2}
          width="5"
          height="5"
        />
        <rect
           x= {rectangle.x-2} y={rectangle.y +rectangle.height-2}
          width="5"
          height="5"
        />
      </svg>
      </PageContent>
    ))
}
