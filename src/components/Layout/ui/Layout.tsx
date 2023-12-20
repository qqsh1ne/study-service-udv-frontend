import React, { FC } from 'react';
import { Layout as AntLayout } from 'antd';
import cls from './Layout.module.scss';
type LayoutProps = {
	children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className={cls.main}>
			<AntLayout.Content style={{ height: '100%' }}>
				{children}
			</AntLayout.Content>
		</div>
	);
};

export default Layout;
