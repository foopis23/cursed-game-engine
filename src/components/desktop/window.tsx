'use client';

import { useState } from "react";
import { Rnd } from "react-rnd";

export interface WindowProps {
  children?: React.ReactNode
  defaultSize?: [number, number]
  defaultPosition?: [number, number]
  minWidth?: number
  minHeight?: number
}

export default function Window(props: WindowProps) {
  const {
    children,
    defaultSize = [400, 300],
    defaultPosition = [0, 0],
    minWidth = 200,
    minHeight = 200,
  } = props

  const [size, setSize] = useState(defaultSize)
  const [position, setPosition] = useState(defaultPosition)
  const [isDragging, setIsDragging] = useState(false)

  return (
    <Rnd
      size={{ width: size[0], height: size[1] }}
      position={{ x: position[0], y: position[1] }}
      onDragStart={() => {
        setIsDragging(true)
      }}
      onDragStop={(e, d) => {
        setPosition([d.x, d.y])
        setIsDragging(false)
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        setSize([ref.offsetWidth, ref.offsetHeight])
        setPosition([position.x, position.y])
      }}
      minWidth={minWidth}
      minHeight={minHeight}
      dragHandleClassName="drag-handle"
    >
      <div className={`bg-white text-black w-full h-full p-0 m-0 max-h-full ${isDragging ? 'opacity-50' : 'opacity-100'}`}>
        <div className="drag-handle select-none bg-slate-800 flex-grow-0 flex-shrink-0 hover:cursor-grab active:cursor-grabbing p-2 text-white h-window-title-bar">
          Cubes.exe
        </div>
        <div className="h-window-body">
          {children}
        </div>
      </div>
    </Rnd>
  )
}