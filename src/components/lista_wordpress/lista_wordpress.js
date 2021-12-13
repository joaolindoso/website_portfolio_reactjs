import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid } from 'react-materialize'

import useFetch from './useFetch';
    
export default function Posts() {
    const posts = useFetch('/wp-json/wp/v2/posts');
  return (
    <Grid container spacing={2}>
      {posts && posts.map((post, index) => (
      <Grid item xs={4} key={index}>
        <Card>
            <CardContent>
                <Typography
                    color="textSecondary"
                    gutterBottom
                    dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                <Typography
                    variant="body2"
                    component="p"
                    dangerouslySetInnerHTML={{__html: post.content.rendered}} />
            </CardContent>
        </Card>
      </Grid>
      ))}
    </Grid>
  );
}