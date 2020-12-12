//used to talk to sanity.

import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "2eizytml",
    dataset: "production"
})