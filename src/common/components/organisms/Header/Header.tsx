import React from 'react'
import { Anchor, Breadcrumbs, Flex, Header as MantineHeader, Menu } from '@mantine/core'
import Text from '../../atoms/Text/Text'
import { ReactComponent as DeliverIcon } from '../../../assets/icons/delivered.svg'
import './Header.scss'


const breadCrumbData = [
  { title: 'ダッシュボード', href: '#' },
  { title: '代理店リスト', href: '#' },
  { title: '注文リスト', href: '#' },
]

const Header = () => {
  const breadCrumbItems = breadCrumbData.map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ))
  return (
    <MantineHeader height={60} p="xs">
          <Breadcrumbs separator="&rsaquo;">{breadCrumbItems}</Breadcrumbs>
          <Menu shadow="md">
            <Menu.Target>
              <Flex gap={'md'}>
                <Text>Name</Text>
                <DeliverIcon fill="red.9" />
              </Flex>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item component="a" href="https://mantine.dev">
                アカウントを編集
              </Menu.Item>

              <Menu.Item
                component="a"
                href="https://mantine.dev"
                target="_blank"
              >
                パスワードを変更
              </Menu.Item>
              <Menu.Item
                component="a"
                href="https://mantine.dev"
                target="_blank"
              >
                ログアウト
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </MantineHeader>
  )
}

export default Header