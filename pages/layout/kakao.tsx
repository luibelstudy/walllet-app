import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import Chat from "./tab/chat";
import Gift from "./tab/gift";
import Member from "./tab/member";
import More from "./tab/more";
import SettingsIcon from '@mui/icons-material/Settings';

export default function Kakao() {
    
    const [content, setContent] = useState<any>('내용입니다.')
    const [title, setTitle] = useState('')

    function onClickMember() {
        setContent(<Member />)
        setTitle('회원')
    }

    function onClickChat() {
        setContent(<Chat />)
        setTitle('채팅')
    }

    function onClickGift() {
        setContent(<Gift />)
    }

    function onClickMore() {
        setContent(<More />)
    }

    return <>      
    <Stack sx={{ height: '100vh'}}>
        <Stack direction="row" alignItems="center"  sx={{ background: 'yellow', height: 50, px: 2 }} >
            <Box sx={{ flexGrow: 1, fontSize: 20, fontWeight: 'bold' }}>카카오톡 : {title}</Box>
            <Button>회원설정</Button>
        </Stack>
        
        <Box sx={{ flexGrow: 1}}>{content}</Box>
        
        <Stack direction="row" alignItems="center" sx={{ height: 50, background: 'gray', justifyContent: 'space-around' }}>
            <Button sx={{ color: 'white' }} onClick={onClickMember}>회원</Button>
            <Button sx={{ color: 'white' }} onClick={onClickChat}>채팅</Button>
            <Button sx={{ color: 'white' }} onClick={onClickGift}>선물하기</Button>
            <Button sx={{ color: 'white' }} onClick={onClickMore}>더보기</Button>
        </Stack>
    </Stack>
    </>
}
