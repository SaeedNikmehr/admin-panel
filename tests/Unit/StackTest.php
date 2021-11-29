<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;

final class StackTest extends TestCase
{
    public function testEmpty(): array
    {
        $stack = [];
        $this->assertEmpty( $stack );

        return $stack;
    }

    /**
     * @depends testPush
     */
    public function testPop( array $stack ): void
    {
        array_pop( $stack );
        $this->assertSame( 'foo', $stack[ 0 ] );
        $this->assertNotEmpty( $stack );
    }

    /**
     * @depends testEmpty
     */
    public function testPush( array $stack ): array
    {
        $stack[] = 'foo';
        $stack[] = 'doo';
        $this->assertSame( 'foo', $stack[ count( $stack ) - 2 ] );
        $this->assertNotEmpty( $stack );
        return $stack;
    }


}
