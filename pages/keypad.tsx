import { Button, Stack } from "@mui/material";
import React from "react";

export default function Keypad() {
    return <>
    <Stack direction="row">
        <Button>N</Button>
        <Button>/</Button>
        <Button>*</Button>
        <Button>-</Button>
    </Stack>
    <Stack direction="row">
        <Stack>
            <Stack direction="row">
                <Button>7</Button>
                <Button>8</Button>
                <Button>9</Button>
            </Stack>
            <Stack direction="row">
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
            </Stack>
        </Stack>
        <Button>+</Button>
    </Stack>
    <Stack direction="row">
        <Stack>
            <Stack direction="row">
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
            </Stack>
            <Stack direction="row">
                <Button>0</Button>
                <Button>D</Button>
            </Stack>
        </Stack>
        <Button>E</Button>
    </Stack>
    </>
}