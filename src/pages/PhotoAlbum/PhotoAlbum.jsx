
/**
 *  1. 사진 등록하기를 통해 등록된 이미지들을 각자 자유롭게 디자인하여 불러와야함.
 *  2. localStorage에 저장된 사진이 없으면 
 *      <h1>불러올 사진이 없습니다.<h1>
 *      문구가 중앙에 나오도록해야함.
 */

import { useMemo } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const layout = css`
    width: 100%;
    height: 50px;
`;

function PhotoAlbum() {

    const imgList = useMemo(() => {
        const lsimgList = localStorage.getItem("photo");
        return !lsimgList ? [] : JSON.parse(lsimgList);
    }, []);

    return (
        <div css={layout}>
            {imgList.map(img => {
                <img src={img.imageUrl} alt={img.file} />
            })}
        </div>
    );
}

export default PhotoAlbum;