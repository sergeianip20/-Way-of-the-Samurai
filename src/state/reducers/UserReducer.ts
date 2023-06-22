import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {createAppAsyncThunk} from "./createAsyncThunkApp";
import {handleServerNetworkError} from "../../component/Error";
import {userApi} from "../../Api/Api";

export type InitialStateUserType = {
    users: Array<usersTypeData>
    pagesSize: number
    totalUsersCount: number,
    currentPage: number
    preloader: boolean,
    toggleisFollowed: Array<number>
}
export type usersTypeData = {
    id: number,
    followed: boolean
    name: string
    status: string | null
    photos: {
        large: string | null
        small: string | null
    }
    uniqueUrlName: string | null
}
let initialState: InitialStateUserType = {
    users: [],
    pagesSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    preloader: true,
    toggleisFollowed: []
}
type  userArgFetch = {
    currentPage: number, pageSize: number
}
const usersFetch = createAppAsyncThunk<{ items: Array<usersTypeData>, totalUserCount:number }, userArgFetch>(
    'users/fetch', async (arg: userArgFetch, thunkAPI: any) => {
        const {dispatch, rejectWithValue} = thunkAPI;
        const res = await userApi.getUsers(arg.currentPage, arg.pageSize)
        try {
            console.log(res.items)
        return {items:res.items, totalUserCount:res.totalCount}

        } catch (e) {
            handleServerNetworkError(e, dispatch);
            return rejectWithValue(null);
        }

    }
)

const slice = createSlice({
    name: 'Users',
    initialState,
    reducers: {},
    extraReducers:(builder)=> {
        builder.addCase(usersFetch.fulfilled , (state, action)=> {
             state.users = [...action.payload.items]
            state.totalUsersCount = action.payload.totalUserCount
        })
    }
})

export const Userreducer = slice.reducer
export const userThunk = {usersFetch}