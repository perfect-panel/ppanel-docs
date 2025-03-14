import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { cn } from '@/lib/utils';
interface LinkItem {
  name: string;
  logo: string;
  url: string;
}

const ExternalLink: React.FC<{ className?: string }> = ({ className }) => {
  const items: LinkItem[] = [
    {
      name: '宝塔面板',
      logo: 'https://www.bt.cn/static/new/images/logo.png',
      url: 'https://pmxu.wiki/261/',
    },
    {
      name: '1panel面板',
      logo: 'https://1panel.cn/img/logo-blue.png',
      url: 'https://pmxu.wiki/315/',
    },
    // 可以根据需要添加更多链接
  ];

  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4', className)}>
      {items.map((item: LinkItem) => (
        <Card
          key={item.name}
          className='flex items-center p-4 hover:shadow-lg transition-shadow duration-200'
        >
          <Image
            src={item.logo}
            alt={`${item.name} Logo`}
            width={50}
            height={50}
            className='mr-4'
          />
          <CardContent className='flex items-center p-0'>
            <a
              href={item.url}
              target='_blank'
              rel='noopener noreferrer'
              className={cn('text-lg font-semibold text-blue-600')}
            >
              {item.name}
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ExternalLink;
