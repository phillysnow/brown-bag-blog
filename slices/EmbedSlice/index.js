import React from 'react'
import EmbedContainer from 'react-oembed-container';
import { Bounded } from "../../components/Bounded";


/**
 * @typedef {import("@prismicio/client").Content.EmbedSliceSlice} EmbedSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EmbedSliceSlice>} EmbedSliceProps
 * @param { EmbedSliceProps }
 */
const EmbedSlice = ({ slice }) => (
  <Bounded as="section">
    <EmbedContainer markup={slice.primary.embed.html}>
      <div dangerouslySetInnerHTML={{ __html: slice.primary.embed.html }} />
    </EmbedContainer>
  </Bounded>
)

export default EmbedSlice