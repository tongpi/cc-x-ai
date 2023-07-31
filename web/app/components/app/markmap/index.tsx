import React, { useEffect, useRef, useState } from 'react'
import { Transformer } from 'markmap-lib'
import { Markmap } from 'markmap-view'
import { Toolbar } from 'markmap-toolbar'
import 'markmap-toolbar/dist/style.css'

const transformer = new Transformer()
const initValue = `# markmap

- beautiful
- useful
- easy
- interactive
`

function renderToolbar(mm: Markmap, wrapper: HTMLElement) {
  while (wrapper?.firstChild) wrapper.firstChild.remove()
  if (mm && wrapper) {
    const toolbar = new Toolbar()
    toolbar.setBrand(false)
    toolbar.attach(mm)
    // Register custom buttons
    toolbar.register({
      id: 'export',
      title: '导出SVG',
      content: '导出',
      onClick: () => alert('Coom Soon!'),
    })
    toolbar.setItems([...Toolbar.defaultItems, 'export'])
    wrapper.append(toolbar.render())
  }
}

type MarkmapProps = {
  value: string
  className?: string
}

export default function MarkmapHooks(props: MarkmapProps) {
  const [value, setValue] = useState(props.value)
  // Ref for SVG element
  const refSvg = useRef<SVGSVGElement>()
  // Ref for markmap object
  const refMm = useRef<Markmap>()
  // Ref for toolbar wrapper
  const refToolbar = useRef<HTMLDivElement>()

  useEffect(() => {
    // Create markmap and save to refMm
    // @ts-expect-error none
    const mm = Markmap.create(refSvg.current)
    refMm.current = mm
    // @ts-expect-error none
    renderToolbar(refMm.current, refToolbar.current)
  }, [refSvg.current])

  useEffect(() => {
    // Update data for markmap once value is changed
    const mm = refMm.current
    if (!mm)
      return
    const { root } = transformer.transform(value)
    mm.setData(root)
    mm.fit()
  }, [refMm.current, value])

  const handleChange = (e: any) => {
    setValue(e.target.value)
  }

  return (
    <React.Fragment>
      {
      // @ts-expect-error none
        <svg ref={refSvg} style={{ width: '100%', height: '50vh' }}/>
      }
      {
      // @ts-expect-error none
        <div className="bottom-1 right-1" ref={refToolbar}></div>
      }
    </React.Fragment>
  )
}
