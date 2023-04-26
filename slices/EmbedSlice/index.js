import React from 'react'
import EmbedContainer from 'react-oembed-container';

/**
 * @typedef {import("@prismicio/client").Content.EmbedSliceSlice} EmbedSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EmbedSliceSlice>} EmbedSliceProps
 * @param { EmbedSliceProps }
 */
const EmbedSlice = ({ slice }) => (
  <section>
    <EmbedContainer markup={slice.primary.embed.html}>
      <div dangerouslySetInnerHTML={{ __html: slice.primary.embed.html }} />
    </EmbedContainer>
  </section>
)

export default EmbedSlice