import React from 'react'
import {  Grid, Image, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default function ProjectCard() {
  return (
    <div className='projectcard-main'>
    <Grid stackable columns={2}>
        <Grid.Column>
          <Segment>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Segment>
        </Grid.Column>
    </Grid>
    </div>
  )
}
