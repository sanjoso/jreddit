import { createSlice } from "@reduxjs/toolkit";

    const slice = {
        name: 'comments',
        initialState: [
            {
                id: 'comment1',
                body: 'Nice picture!',
                author: 'Margie',
            },
            {
                id: 'comment2',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel massa maximus, placerat dolor sit amet, blandit orci. Praesent nibh nisl, vulputate non lacus non, scelerisque ornare odio. Mauris id mollis est. Duis imperdiet pulvinar risus, a posuere ex placerat nec. Suspendisse lacinia eros id tellus commodo, tempor consequat nunc lacinia. Vestibulum vehicula, libero ac efficitur ornare, velit odio ultricies sapien, eu congue diam erat imperdiet lacus. Morbi aliquam nibh vitae tellus congue hendrerit. In vehicula nibh et venenatis blandit. Proin lorem turpis, ultrices egestas leo non, faucibus suscipit quam. Quisque a feugiat neque. Etiam laoreet fermentum consectetur. Aenean gravida dolor elit, ac ultrices lectus varius vitae.',
                author: 'stevo___bevo___5',
            },
            {
                comment: 'comment3',
                body: 'This is really nice. I remember staying there one summer as well.',
                author: 'dantiso91',
            },
        ],
        reducers: {
            getComments: (state, action) => {
                return state.comments;
            }
        },
    }

    const commentsSlice = createSlice(slice);
    export const { getComments } = commentsSlice.actions;
    export default commentsSlice.reducer;

    export const selectComments = (state) => state.comments;